
export const getCurrentRoute = () => {

    const meta_route = import.meta.env;
    const route = meta_route.PROD ? meta_route.PUBLIC_GLOBAL_ROUTE : meta_route.PUBLIC_LOCAL_ROUTE;
    
    console.log("RUTA ACTUAL: ", route);

    return route;

}; // 
