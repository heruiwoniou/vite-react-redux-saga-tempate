import React, { useMemo } from "react";
import { Redirect } from "@reach/router";
import { NotFoundRedirect } from "@/NotFound";
import { LazyRouter, StaticRouter } from "@/components/RouterComponent";

export default function useRoutes(routes: RouterConfig[]) {
	return useMemo(() => {
    let defaultRedirect: RouterConfig[] = [];
    const makeRoutes = (routes: RouterConfig[]) => {
      const res = []
      let route: RouterConfig | void;
      while ((route = routes.shift())) {
        const { component, redirect, default: isDefault = false, routes: children = [], path, name } = route;
        if (isDefault) { defaultRedirect.push(route); }
        const key = path?.replace("/", "_");
        const RouterPage = typeof component == 'string' ? LazyRouter : StaticRouter;
        if (RouterPage) {
          res.push(
            <RouterPage key={`component-${key}`} name={name} path={path} component={component}>
              {redirect && <Redirect key={`redirect-${key}`} from={path} to={redirect} noThrow />}
              {makeRoutes(children.slice())}
              {path && <NotFoundRedirect from={path} default/>}
            </RouterPage>
          )
          }
      }

      return res;
    };

    const embeddedRoutes = makeRoutes(routes.slice());

    if (!defaultRedirect.length) { throw new Error('Miss the default route in routes');}

    return {
      embeddedRoutes,
      defaultRoute: defaultRedirect.shift()
    }

  }, [routes]);
}