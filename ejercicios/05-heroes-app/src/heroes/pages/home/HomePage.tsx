import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CustomJumbotron } from "@/components/custom/CustomJumbotron"
import { HeroStats } from "@/heroes/components/HeroStats"
import { HeroGrid } from "@/heroes/components/HeroGrid"
import { useState } from "react"
import { CustomPagination } from "@/components/custom/CustomPagination"
import { CustomBreadcrumbs } from "@/components/custom/CustomBreadcrumbs"
import { getHeroesByPageAction } from "@/heroes/actions/get-heroes-by-page.action"
import { useQuery } from "@tanstack/react-query"
import { heroes } from '../../../../../01-reforzamiento/src/data/heroes.data';

type tabType = "all" | "favorites" | "heroes" | "villains";

export const HomePage = () => {

   const [activeTab, setActiveTab] = useState<tabType>("all");

   const { data: heroesResponse, isLoading } = useQuery({
      queryKey: ['heroes'],
      queryFn: () => getHeroesByPageAction(),
      staleTime: 1000 * 60 * 5, // 5 minutes
   })

   const { heroes = [], total, pages = 1 } = heroesResponse || {};

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
         <Tabs value={activeTab} className="mb-8">
            <TabsList className="grid w-full grid-cols-4">
               <TabsTrigger value="all"
                  onClick={() => setActiveTab("all")}
               >
                  All Characters (16)
               </TabsTrigger>
               <TabsTrigger value="favorites" className="flex items-center gap-2"
                  onClick={() => setActiveTab("favorites")}
               >
                  Favorites (3)
               </TabsTrigger>
               <TabsTrigger value="heroes" className="flex items-center gap-2"
                  onClick={() => setActiveTab("heroes")}
               >
                  Heroes (12)
               </TabsTrigger>
               <TabsTrigger value="villains" className="flex items-center gap-2"
                  onClick={() => setActiveTab("villains")}
               >
                  Villains (2)
               </TabsTrigger>
            </TabsList>

            <TabsContent value="all">
               <h1>Todos los personajes</h1>
               {/* Mostrar todos los personajes */}
               <HeroGrid heroes={heroes} />
            </TabsContent>
            <TabsContent value="favorites">
               <h1>Favoritos</h1>
               <HeroGrid heroes={heroes} />
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
         <CustomPagination totalPages={pages} />
      </>
   )
}