export interface IGig {
    description: string;
    amount: number;
};

export const createGig = (description: string, amount: number) => {
    const g: IGig = {
        description,
        amount
    };
    return g;
};


export const testGigs: IGig[] = [
    {description: "Got job at Microsoft",
     amount: 100000.0
    },
    {description: "Freelance at upwork",
     amount: 3000.0
    },
    {description: "Side project for a friend",
     amount: 4000.0
    },    
];

