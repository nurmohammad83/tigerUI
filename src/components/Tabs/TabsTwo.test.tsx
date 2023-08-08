import { render, fireEvent, screen } from '@testing-library/react';
import { Tab, TabsTwo } from './TabsTwo';

describe('TabsTwo component', () => {
  it('renders tabs with correct labels and icons', () => {
    render(
      <TabsTwo>
        <Tab label="Tab 1" icon="☰">
          Content for Tab 1
        </Tab>
        <Tab label="Tab 2">
          Content for Tab 2
        </Tab>
        <Tab label="Tab 3">
          Content for Tab 3
        </Tab>
      </TabsTwo>
    );

    const tabs = [
      { label: 'Tab 1', icon: '☰' },
      { label: 'Tab 2' },
      { label: 'Tab 3' },
    ];

    tabs.forEach((tab) => {
      const labelElement = screen.getByText(tab.label);
      expect(labelElement).toBeInTheDocument();

      if (tab.icon) {
        const iconElement = screen.getByText(tab.icon);
        expect(iconElement).toBeInTheDocument();
      }
    });
  });

  it('renders the correct content when clicking on a tab', () => {
    render(
      <TabsTwo>
        <Tab label="Tab 1">
          Content for Tab 1
        </Tab>
        <Tab label="Tab 2">
          Content for Tab 2
        </Tab>
        <Tab label="Tab 3">
          Content for Tab 3
        </Tab>
      </TabsTwo>
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();

    fireEvent.click(screen.getByText('Tab 1'));
    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();
  });

  it('sets the first tab as active by default', () => {
    render(
      <TabsTwo>
        <Tab label="Tab 1">
          Content for Tab 1
        </Tab>
        <Tab label="Tab 2">
          Content for Tab 2
        </Tab>
        <Tab label="Tab 3">
          Content for Tab 3
        </Tab>
      </TabsTwo>
    );

    expect(screen.getByText('Content for Tab 1')).toBeInTheDocument();
  });

  it('hides inactive tab content', () => {
    render(
      <TabsTwo>
        <Tab label="Tab 1">
          Content for Tab 1
        </Tab>
        <Tab label="Tab 2">
          Content for Tab 2
        </Tab>
        <Tab label="Tab 3">
          Content for Tab 3
        </Tab>
      </TabsTwo>
    );

    fireEvent.click(screen.getByText('Tab 2'));
    expect(screen.queryByText('Content for Tab 1')).not.toBeInTheDocument();
    expect(screen.getByText('Content for Tab 2')).toBeInTheDocument();
  });
});