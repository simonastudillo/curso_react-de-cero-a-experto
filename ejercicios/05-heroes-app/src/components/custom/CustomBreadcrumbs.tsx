import { Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { SlashIcon } from "lucide-react"

export interface BreadcrumbItem {
   label: string;
   url: string;
}

interface CustomBreadcrumbsProps {
   items?: BreadcrumbItem[];
   currentPage: string;
}

export const CustomBreadcrumbs = ({ items, currentPage }: CustomBreadcrumbsProps) => {
   return (
      <Breadcrumb className="my-5">
         <BreadcrumbList>
            {
               items?.map((item, index) => (
                  <>
                     <BreadcrumbItem key={index}>
                        <BreadcrumbLink asChild>
                           <Link to={item.url}>{item.label}</Link>
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator>
                        <SlashIcon />
                     </BreadcrumbSeparator>
                  </>

               ))
            }

            <BreadcrumbItem>
               <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
         </BreadcrumbList>
      </Breadcrumb>
   )
}
