import React, { useEffect, useRef, useState } from "react";
import {
  Header,
  ContentLayout,
  Box,
  AppLayout,
  BreadcrumbGroup,
  Link,
  SideNavigation,
  SplitPanel,
  SpaceBetween,
} from "@cloudscape-design/components";
import { I18nProvider } from "@cloudscape-design/components/i18n";
import messages from "@cloudscape-design/components/i18n/messages/all.en";
import WebViewer from "@pdftron/webviewer";
import { applyTheme } from '@cloudscape-design/components/theming';
import TopNavigation from "@cloudscape-design/components/top-navigation";
import Table from "@cloudscape-design/components/table";
import Button from "@cloudscape-design/components/button";
import TextFilter from "@cloudscape-design/components/text-filter";
import Pagination from "@cloudscape-design/components/pagination";
import CollectionPreferences from "@cloudscape-design/components/collection-preferences";

const theme = {
   tokens: {
      colorBackgroundLayoutMain: {
          light: '#f4f4f4',
          dark: 'blue'
      }
   },
};

applyTheme({ theme });

const appStyle = {
  backgroundColor: '#000',
};



// Assign your function to a variable
export function Home() {
  const viewer = useRef(null);
  const [, ] = useState(false);

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
   const [
    selectedItems,
    setSelectedItems
  ] = React.useState([{ name: "Item 2" }]);
  return (
    <I18nProvider locale={LOCALE} messages={[messages]}>
      <div  style={{ position: 'sticky', top: 0, zIndex: 1002 }}>
      <TopNavigation
        id="topNavigation"
      identity={{
        href: "#",
        title: "Service",
        logo: {
          src: "/RD_Horizozntal_White_Logo@2x.png",
          alt: "Service"
        }
      }}
      utilities={[
        {
          type: "button",
          text: "Link",
          href: "#",
          external: true,
          externalIconAriaLabel: " (opens in a new tab)"
        },
        {
          type: "button",
          iconName: "notification",
          title: "Notifications",
          ariaLabel: "Notifications (unread)",
          badge: true,
          disableUtilityCollapse: false
        },
        {
          type: "menu-dropdown",
          iconName: "settings",
          ariaLabel: "Settings",
          title: "Settings",
          items: [
            {
              id: "settings-org",
              text: "Organizational settings"
            },
            {
              id: "settings-project",
              text: "Project settings"
            }
          ]
        },
        {
          type: "menu-dropdown",
          text: "Customer Name",
          description: "email@example.com",
          iconName: "user-profile",
          items: [
            { id: "profile", text: "Profile" },
            { id: "preferences", text: "Preferences" },
            { id: "security", text: "Security" },
            {
              id: "support-group",
              text: "Support",
              items: [
                {
                  id: "documentation",
                  text: "Documentation",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                },
                { id: "support", text: "Support" },
                {
                  id: "feedback",
                  text: "Feedback",
                  href: "#",
                  external: true,
                  externalIconAriaLabel:
                    " (opens in new tab)"
                }
              ]
            },
            { id: "signout", text: "Sign out" }
          ]
        }
      ]}
        />
        </div>
      <ContentLayout
        disableOverlap
        disableContentPaddings
      >
        <AppLayout
          contentType="default"
          navigationOpen={true}
          style={appStyle}
          headerSelector="#topNavigation"
          className="appLayout"
          navigation={
            <SideNavigation
              header={{
                href: "#",
                text: "Service name",
              }}
              items={[{ type: "link", text: `Paage #1`, href: `#` }]}
            />
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
            
                  <Table
      onSelectionChange={({ detail }) =>
        setSelectedItems(detail.selectedItems)
      }
      selectedItems={selectedItems}
      ariaLabels={{
        selectionGroupLabel: "Items selection",
        allItemsSelectionLabel: ({ selectedItems }) =>
          `${selectedItems.length} ${
            selectedItems.length === 1 ? "item" : "items"
          } selected`,
        itemSelectionLabel: ({ selectedItems }, item) =>
          item.name
      }}
      columnDefinitions={[
        {
          id: "variable",
          header: "Variable name",
          cell: item => <Link href="#">{item.name}</Link>,
          sortingField: "name",
          isRowHeader: true
        },
        {
          id: "value",
          header: "Text value",
          cell: item => item.alt,
          sortingField: "alt"
        },
        {
          id: "type",
          header: "Type",
          cell: item => item.type
        },
        {
          id: "description",
          header: "Description",
          cell: item => item.description
        }
      ]}
      columnDisplay={[
        { id: "variable", visible: true },
        { id: "value", visible: true },
        { id: "type", visible: true },
        { id: "description", visible: true }
      ]}
      items={[
        {
          name: "Item 1",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small"
        },
        {
          name: "Item 2",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large"
        },
        {
          name: "Item 3",
          alt: "Third",
          description: "-",
          type: "1A",
          size: "Large"
        },
        {
          name: "Item 4",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small"
        },
        {
          name: "Item 5",
          alt: "-",
          description:
            "This is the fifth item with a longer description",
          type: "2A",
          size: "Large"
        },
        {
          name: "Item 6",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small"
        },
         {
          name: "Item 7",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small"
        },
        {
          name: "Item 8",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large"
        },
        {
          name: "Item 9",
          alt: "Third",
          description: "-",
          type: "1A",
          size: "Large"
        },
        {
          name: "Item 10",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small"
        },
        {
          name: "Item 11",
          alt: "-",
          description:
            "This is the fifth item with a longer description",
          type: "2A",
          size: "Large"
        },
        {
          name: "Item 12",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small"
        },
         {
          name: "Item 13",
          alt: "First",
          description: "This is the first item",
          type: "1A",
          size: "Small"
        },
        {
          name: "Item 14",
          alt: "Second",
          description: "This is the second item",
          type: "1B",
          size: "Large"
        },
        {
          name: "Item 15",
          alt: "Third",
          description: "-",
          type: "1A",
          size: "Large"
        },
        {
          name: "Item 16",
          alt: "Fourth",
          description: "This is the fourth item",
          type: "2A",
          size: "Small"
        },
        {
          name: "Item 17",
          alt: "-",
          description:
            "This is the fifth item with a longer description",
          type: "2A",
          size: "Large"
        },
        {
          name: "Item 18",
          alt: "Sixth",
          description: "This is the sixth item",
          type: "1A",
          size: "Small"
        }
      ]}
      loadingText="Loading resources"
      selectionType="multi"
      trackBy="name"
      empty={
        <Box
          margin={{ vertical: "xs" }}
          textAlign="center"
          color="inherit"
        >
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      filter={
        <TextFilter
          filteringPlaceholder="Find resources"
          filteringText=""
        />
      }
      header={
        <Header
          counter={
            selectedItems.length
              ? "(" + selectedItems.length + "/10)"
              : "(10)"
          }
        >
          Table with common features
        </Header>
      }
      pagination={
        <Pagination currentPageIndex={1} pagesCount={2} />
      }
      preferences={
        <CollectionPreferences
          title="Preferences"
          confirmLabel="Confirm"
          cancelLabel="Cancel"
          preferences={{
            pageSize: 10,
            contentDisplay: [
              { id: "variable", visible: true },
              { id: "value", visible: true },
              { id: "type", visible: true },
              { id: "description", visible: true }
            ]
          }}
          pageSizePreference={{
            title: "Page size",
            options: [
              { value: 10, label: "10 resources" },
              { value: 20, label: "20 resources" }
            ]
          }}
          wrapLinesPreference={{}}
          stripedRowsPreference={{}}
          contentDensityPreference={{}}
          contentDisplayPreference={{
            options: [
              {
                id: "variable",
                label: "Variable name",
                alwaysVisible: true
              },
              { id: "value", label: "Text value" },
              { id: "type", label: "Type" },
              { id: "description", label: "Description" }
            ]
          }}
          stickyColumnsPreference={{
            firstColumns: {
              title: "Stick first column(s)",
              description:
                "Keep the first column(s) visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "First column", value: 1 },
                { label: "First two columns", value: 2 }
              ]
            },
            lastColumns: {
              title: "Stick last column",
              description:
                "Keep the last column visible while horizontally scrolling the table content.",
              options: [
                { label: "None", value: 0 },
                { label: "Last column", value: 1 }
              ]
            }
          }}
        />
      }
    />
          
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
