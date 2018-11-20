export interface ITabState {
    tabIndex: number;
}

export const TabId = {
    STOCKS: "Stocks" as "Stocks",
    THIS_WEEK: "This Week" as "This Week",
    WEATHER: "Weather" as "Weather",
};

export type TabId = "Weather" | "Stocks" | "This Week";

export const TABS: TabId[] = [
    TabId.WEATHER,
    TabId.STOCKS,
    TabId.THIS_WEEK,
];

export const INITIAL_TAB_STATE: ITabState = { tabIndex: 2 };

// cycle tabs every 30 seconds
export const CYCLE_INTERVAL = 5 * 1000;
