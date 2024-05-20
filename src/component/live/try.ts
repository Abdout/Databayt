export interface ComponentConfig {
  size: string[];
  color?: string[];
}

interface ComponentCategory {
  [key: string]: ComponentConfig;
}

export interface Components {
  [key: string]: ComponentCategory;
}

export const component: Components = {
  atom: {
    button: {
      size: ['lg', 'md', 'sm'],
    
    },
    input: {
      size: ['lg', 'md', 'sm'],
      color: ['wh', 'bk'],
    },
  },
  pound: {
    form: {
      size: ['lg', 'md', 'sm'],
      color: ['wh', 'bk'],
    },
    dropdown: {
      size: ['large', 'medium', 'small'],
      color: ['wh', 'bk'],
    },
  },
  cell: {
    dashboard: {
      size: ['lg', 'md', 'sm'],
      color: ['wh', 'bk'],
    },
    feed: {
      size: ['large', 'medium', 'small'],
      color: ['wh', 'bk'],
    },
  },
  organ: {
    workflow: {
      size: ['lg', 'md', 'sm'],
      color: ['wh', 'bk'],
    },
    integration: {
      size: ['large', 'medium', 'small'],
      color: ['wh', 'bk'],
    },
  },
};
