
export class Portfolio {
    static FilterAll = {name: 'All', filter: '*'};
    static FilterApp = {name: 'Mobile', filter: '.filter-app'};
    static FilterWeb = {name: 'Web', filter: '.filter-web'};
    static FilterAcademic = {name: 'Academic', filter: '.filter-academic'};

    static filters = [Portfolio.FilterAll, Portfolio.FilterApp, Portfolio.FilterWeb, Portfolio.FilterAcademic];
    static filter = (item, filter) => {
        if (filter.filter === Portfolio.FilterAll.filter) return true;
        return item.category.filter === filter.filter;
    }
}

export class PortfolioItem {
    constructor({name, category, image, details}) {
        this.name = name;
        this.category = category;
        this.image = image;
        this.details = details;
    }
}

export class PortfolioItemDetails {
    constructor({links, tech}) {
        this.links = links;
        this.tech = tech;
    }
}