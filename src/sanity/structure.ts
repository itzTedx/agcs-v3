import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list';
import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Content')
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
        title: "Services Category",
        S,
        context,
      }),
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
        title: "Products Category",
        S,
        context,
      }),
    ], );

