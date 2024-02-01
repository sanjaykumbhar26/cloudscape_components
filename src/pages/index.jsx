import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  Container,
  ContentLayout,
  Icon,
  Box,
  AppLayout,
  BreadcrumbGroup,
  Flashbar,
  HelpPanel,
  Link,
  SideNavigation,
  SplitPanel,
  SpaceBetween,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";

import WebViewer from "@pdftron/webviewer";
import ButtonDropdown from "@cloudscape-design/components/button-dropdown";

const headerStyle = {
  padding: 0, // Set padding to 0 to remove it
};

// Assign your function to a variable
export function Home() {
  const viewer = useRef(null);
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    if (viewer.current != null)
      WebViewer(
        {
          path: "/webviewer",
        },
        viewer.current
      ).then((instance) => {
        instance.UI.disableElements(disabledElements);
        instance.UI.disableElements(["toolsHeader"]);
        instance.UI.setFitMode(instance.UI.FitMode.FitWidth);
        instance.UI.loadDocument("/sample.pdf");
      });
  });
  const LOCALE = "en";

  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <ContentLayout
        disableOverlap
        disableContentPaddings
        header={
          <Header
            className="header "
            variant="h1"
            actions={
              <SpaceBetween direction="horizontal" size="xs">
                <ButtonDropdown
                  items={[
                    { text: "Delete", id: "rm", disabled: false },
                    { text: "Move", id: "mv", disabled: false },
                    { text: "Rename", id: "rn", disabled: true },
                    {
                      id: "view",
                      text: "View metrics",
                      href: "https://example.com",
                      external: true,
                      externalIconAriaLabel: "(opens in new tab)",
                    },
                  ]}
                  className="buttonDropdown"
                >
                  Short
                </ButtonDropdown>
              </SpaceBetween>
            }
            disableContentPaddings
            style={headerStyle}
          >
            <SpaceBetween direction="horizontal" size="xs">
              <img
                src="/RD_Horizozntal_White_Logo@2x.png"
                alt="placeholder"
                width="10%"
              />
              Adobe Acrobat Sign
            </SpaceBetween>
          </Header>
        }
      >
        <AppLayout
          contentType="default"
          navigationOpen={navOpen}
          onNavigationChange={(changeDetails) => {
            setNavOpen(changeDetails.detail.open);
          }}
          navigation={
            <SideNavigation
              header={{
                href: "#",
                text: "Service name",
              }}
              items={[{ type: "link", text: `Paage #1`, href: `#` }]}
            />
          }
          notifications={
            <Box padding={{ top: "s" }}>
              <Flashbar
                items={[
                  {
                    type: "info",
                    dismissible: true,
                    content: "This is an info flash message.",
                    id: "message_1",
                  },
                ]}
              />
            </Box>
          }
          toolsHide
          content={
            <SpaceBetween size="xs">
              <BreadcrumbGroup
                items={[
                  { text: "Home", href: "#" },
                  { text: "Service", href: "#" },
                ]}
              />
              <Container
                header={
                  <Header variant="h2" description="Container description">
                    Container header
                  </Header>
                }
              >
                <div className="contentPlaceholder" />
              </Container>
            </SpaceBetween>
          }
          splitPanel={
            <SplitPanel header="Split panel header">
              Split panel content
            </SplitPanel>
          }
        />
      </ContentLayout>
    </I18nProvider>
  );
}

const disabledElements = [
  "ribbons",
  "toggleNotesButton",
  "searchButton",
  "menuButton",
  "annotationPopup",
  "thumbDelete",
  "pageManipulationOverlayButton",
  "thumbnailsControlInsertPopupTrigger",
  "thumbnailsControlReplace",
  "thumbnailsControlExtract",
  "thumbnailsControlDelete",
  "thumbnailsControlManipulatePopupTrigger",
  "selectToolButton",
  "searchButton",
  "toggleNotesButton",
  "menuButton",
  "moreButton",

  //text popup; appears on highlight of a text when using select tool
  "textHighlightToolButton",
  "textUnderlineToolButton",
  "textSquigglyToolButton",
  "textStrikeoutToolButton",
  "linkButton",

  //context menu popup; appears on right click of a blank space
  "contextMenuPopup",

  //hide ribbon tools
  "toolbarGroup-View",
  "toolbarGroup-Annotate",
  "toolbarGroup-Shapes",
  "toolbarGroup-Insert",
  "toolbarGroup-Measure",
  "toolbarGroup-Edit",
  "toolbarGroup-FillAndSign",

  //toolbarGroup-Forms
  "listBoxFieldToolGroupButton",
  "comboBoxFieldToolGroupButton",
  "applyFormFieldsButton",

  //Thumbnail
  "thumbRotateCounterClockwise",
  "thumbRotateClockwise",
];
