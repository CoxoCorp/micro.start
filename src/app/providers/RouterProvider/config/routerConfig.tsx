import {RouteObject} from "react-router-dom";
import {Page404} from "src/pages/Page404";
import {IndexPage} from "src/pages/IndexPage";

const BaseDir = '/start';

export enum SitePath {
    'IndexPage'= BaseDir,
}

export const AppRouts: RouteObject[] = [
    {
        path: SitePath.IndexPage,
        element: <IndexPage/>
    },
    //404
    {
        path: "*",
        element: <Page404/>
    }
]
