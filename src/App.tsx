import { Refine } from "@refinedev/core"
import { DevtoolsPanel, DevtoolsProvider } from "@refinedev/devtools"
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar"

import { useNotificationProvider } from "@refinedev/antd"
import "@refinedev/antd/dist/reset.css"

import { authProvider, dataProvider, liveProvider } from "./provider"

import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier
} from "@refinedev/react-router-v6"
import { App as AntdApp } from "antd"
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <AntdApp>
          <DevtoolsProvider>
            <Refine
              dataProvider={dataProvider}
              liveProvider={liveProvider}
              notificationProvider={useNotificationProvider}
              routerProvider={routerBindings}
              authProvider={authProvider}
              options={{
                syncWithLocation: true,
                warnWhenUnsavedChanges: true,
                useNewQueryKeys: true,
                projectId: "jwwk6s-cyWWY6-7mjv11",
                liveMode: "auto"
              }}
            >
              <Routes></Routes>
              <RefineKbar />
              <UnsavedChangesNotifier />
              <DocumentTitleHandler />
            </Refine>
            <DevtoolsPanel />
          </DevtoolsProvider>
        </AntdApp>
      </RefineKbarProvider>
    </BrowserRouter>
  )
}

export default App
