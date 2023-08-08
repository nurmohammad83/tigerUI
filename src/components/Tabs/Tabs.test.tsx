import { render, fireEvent, screen } from '@testing-library/react';
import Tabs from './Tabs'; // Assuming this is the path to your Tabs component

describe('Tabs component', () => {
  const tabs = [
    {
      label: 'Tab 1',
      icon: '☰',
      content: <div>Content for Tab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam deleniti, voluptatem libero praesentium atque consequatur ut eius quam in odio.</div>,
    },
    {
      label: 'Tab 2',
      content: <div>Content for Tab 2</div>,
    },
  ];

  it('renders the correct number of tabs', () => {
    render(<Tabs tabs={tabs} />);
    const tabButtons = screen.getAllByRole('button');
    expect(tabButtons.length).toBe(tabs.length);
  });

  it('renders the correct label and icon for each tab', () => {
    render(<Tabs tabs={tabs} />);
    tabs.forEach((tab) => {
      const labelElement = screen.getByText(tab.label);
      expect(labelElement).toBeInTheDocument();

      if (tab.icon) {
        const iconElement = screen.getByText(tab.icon);
        expect(iconElement).toBeInTheDocument();
      }
    });
  });

  it('renders the content of the default active tab', () => {
    render(<Tabs tabs={tabs} defaultActiveTab={0} />);
    const defaultContent = screen.getByText(/Content for Tab 1 Lorem ipsum dolor sit amet, consectetur adipisicing elit./i);
    expect(defaultContent).toBeInTheDocument();
  });

  it('changes the active tab when clicking on a tab button', () => {
    render(<Tabs tabs={tabs} />);
    const tabButton = screen.getByText(/Tab 2/i);
    fireEvent.click(tabButton);

    const content = screen.getByText(/Content for Tab 2/i);
    expect(content).toBeInTheDocument();
  });
});
