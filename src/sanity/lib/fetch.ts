import { HOME_PROJECTS_QUERYResult, HOME_SERVICES_QUERYResult } from "../../../sanity.types";
import { HOME_PROJECTS_QUERY } from "../queries/projects";
import { HOME_SERVICES_QUERY } from "../queries/services";
import { sanityFetch } from "./live";

export const getHomeServices = async (): Promise<HOME_SERVICES_QUERYResult> => {
    const { data } = await sanityFetch({
      query: HOME_SERVICES_QUERY,
    });
  
    return data;
  };


export const getProjects = async ():Promise<HOME_PROJECTS_QUERYResult> => {
  const { data } = await sanityFetch({
    query: HOME_PROJECTS_QUERY,
  });

  return data;
}
