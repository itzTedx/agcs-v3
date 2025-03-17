import { HOME_SERVICES_QUERYResult } from "../../../sanity.types";
import { HOME_SERVICES_QUERY } from "../queries/services";
import { sanityFetch } from "./live";

export const getHomeServices = async (): Promise<HOME_SERVICES_QUERYResult> => {
    const { data } = await sanityFetch({
      query: HOME_SERVICES_QUERY,
    });
  
    return data;
  };