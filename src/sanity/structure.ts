import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
    .items([
      S.listItem().title("Services").child(
        S.list().title('Manage services')
        .items([
          S.listItem()
        .title("Services")
        .schemaType("services")
        .child(
          S.documentTypeList("services")
            .title("Service")
            .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
        ),
      orderableDocumentListDeskItem({
        type: "servicesCategory",
        title: "Categories",
        S,
        context,
      }),
        ])
      ),
      S.listItem().title("Products").child(
        S.list().title('Manage products')
          .items([
            S.listItem()
            .title("Products")
            .schemaType("products")
            .child(
              S.documentTypeList("products")
                .title("Product")
                .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
            ),
          orderableDocumentListDeskItem({
            type: "productsCategory",
            title: "Categories",
            S,
            context,
          }),  
        ])
      ),
     
      S.listItem().title("Projects").child(
        S.list().title('Manage Projects')
        .items([
          orderableDocumentListDeskItem({
            type: "projectsCarousel",
            title: "Carousel",
            S,
            context,
          }),
          orderableDocumentListDeskItem({
            type: "projects",
            title: "Projects",
            S,
            context,
          }),
          
        ])
      ),

      S.listItem()
      .title("Certifications")
      .schemaType("certifications")
      .child(
        S.documentTypeList("certifications")
          .title("Certification")
          .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
      ),
      S.listItem()
      .title("Gallery")
      .schemaType("gallery")
      .child(
        S.documentTypeList("gallery")
          .title("Gallery")
          .defaultOrdering([{ field: "_createdAt", direction: "desc" }]) // Default ordering
      ),
    ]
  )



