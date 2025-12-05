import { Link } from "react-router";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "../ui/breadcrumb"
import { SlashIcon } from "lucide-react"
import { Fragment } from "react/jsx-runtime";

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
                  <Fragment key={index + '-frag'}>
                     <BreadcrumbItem key={index}>
                        <BreadcrumbLink asChild key={index + '-link'}>
                           <Link to={item.url}>{item.label}</Link>
                        </BreadcrumbLink>
                     </BreadcrumbItem>
                     <BreadcrumbSeparator key={index + '-sep'}>
                        <SlashIcon />
                     </BreadcrumbSeparator>
                  </Fragment>

               ))
            }

            <BreadcrumbItem key="current-page">
               <BreadcrumbPage>{currentPage}</BreadcrumbPage>
            </BreadcrumbItem>
         </BreadcrumbList>
      </Breadcrumb>
   )
}
