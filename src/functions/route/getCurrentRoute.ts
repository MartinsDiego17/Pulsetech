export const getCurrentRoute = () => {

    const meta_route = import.meta.env;
    const route = meta_route.MODE !== 'production' ? "" : meta_route.PUBLIC_LOCAL_ROUTE;

    console.log("RUTA FINAL: ", route);  
    return route;

}; 
