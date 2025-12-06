import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { use, useMemo } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { useSearchParams } from "react-router"
import { useHeroSummary } from "@/heroes/hooks/useHeroSummary"
import { usePaginatedHero } from "@/heroes/hooks/usePaginatedHero"
import { FavoriteHeroContext } from "@/heroes/context/FavoriteHeroContext"

type tabType = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {

   const { favoriteCount, favorites } = use(FavoriteHeroContext);

   const [searchParams, setSearchParams] = useSearchParams();

   const activeTab = searchParams.get("tab") as tabType ?? "all";
   const page = searchParams.get("page") ?? "1";
   const limit = searchParams.get("limit") ?? "6";
   const category = searchParams.get("category") ?? "all";

   const selectedTab = useMemo(() => {
      const validTabs: tabType[] = ["all", "favorites", "heroes", "villains"];
      return validTabs.includes(activeTab) ? activeTab : "all";
   }, [activeTab]);

   const setActiveTab = (tab: tabType, category: string) => {
      setSearchParams((prev) => {
         prev.set("tab", tab);
         prev.set("category", category);
         prev.set("page", "1");
         return prev;
      });
   }

   const { data: heroesResponse } = usePaginatedHero({ page: Number(page), limit: Number(limit), category: category });

   const { heroes = [], pages = 1 } = heroesResponse || {};

   const { data: summaryInformation } = useHeroSummary();
   const { totalHeroes, heroCount, villainCount } = summaryInformation || {};

   return (
      <>
         <CustomJumbotron
            title="Universo de SuperHéroes"
            subtitle="Descubre, explora y gestiona tus superhéroes y villanos favoritos"
         />
         <CustomBreadcrumbs currentPage="Home" />
         {/* Stats Dashboard */}
         <HeroStats />

         {/* Tabs */}
         <Tabs value={selectedTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
               <TabsTrigger value="all"
                  onClick={() => setActiveTab("all", "all")}
               >
                  All Characters ({totalHeroes})
               </TabsTrigger>
               <TabsTrigger value="favorites" className="flex items-center gap-2"
                  onClick={() => setActiveTab("favorites", "all")}
               >
                  Favorites ({favoriteCount})
               </TabsTrigger>
               <TabsTrigger value="heroes" className="flex items-center gap-2"
                  onClick={() => setActiveTab("heroes", "hero")}
               >
                  Heroes ({heroCount})
               </TabsTrigger>
               <TabsTrigger value="villains" className="flex items-center gap-2"
                  onClick={() => setActiveTab("villains", "villain")}
               >
                  Villains ({villainCount})
               </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
               <h1>Todos los personajes</h1>
               {/* Mostrar todos los personajes */}
               <HeroGrid heroes={heroes} />
            </TabsContent>
            <TabsContent value="favorites">
               <h1>Favoritos</h1>
               <HeroGrid heroes={favorites} />
            </TabsContent>
            <TabsContent value="heroes">
               <h1>Heroes</h1>
               <HeroGrid heroes={heroes} />
            </TabsContent>
            <TabsContent value="villains">
               <h1>Villains</h1>
               <HeroGrid heroes={heroes} />
            </TabsContent>
         </Tabs>


         {/* Pagination */}
         {
            selectedTab !== "favorites" && (
               <CustomPagination totalPages={pages} />
            )
         }
      </>
   )
}