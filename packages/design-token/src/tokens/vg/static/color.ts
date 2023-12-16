export const vg = {
  static: {
    color: {
      /**
       * WHITE
       */
      white: {
        value: '#FFFFFF',
        description: 'White',
      },

      /**
       * BLACK
       */
      black: {
        value: '#000000',
        description: 'Black',
      },

      /**
       * GRAY
       */
      gray: {
        90: {
          value: '{vg.static.color.gray.100}',
          description: 'Gray-90 (lighten 10)',
          lighten: 10,
        },
        100: {
          value: '#828382',
          description: 'Gray-100 (default)',
        },
        110: {
          value: '{vg.static.color.gray.100}',
          description: 'Gray-110 (darken 10)',
          darken: 10,
        },
      },

      /**
       * RED
       */
      red: {
        90: {
          value: '{vg.static.color.red.100}',
          description: 'Red-90 (lighten 10)',
          lighten: 10,
          darkMode: null,
        },
        100: {
          value: '#C92519',
          description: 'Red-100 (default)',
          darkMode: null,
        },
        110: {
          value: '{vg.static.color.red.100}',
          description: 'Red-110 (darken 10)',
          darken: 10,
          darkMode: null,
        },
      },

      /**
       * GREEN
       */
      green: {
        90: {
          value: '{vg.static.color.green.100}',
          description: 'Green-90 (lighten 10)',
          lighten: 10,
          darkMode: null,
        },
        100: {
          value: '#00A86B',
          description: 'Green-100 (default)',
          darkMode: null,
        },
        110: {
          value: '{vg.static.color.green.100}',
          description: 'Green-110 (darken 10)',
          darken: 10,
          darkMode: null,
        },
      },

      /**
       * BLUE
       */
      blue: {
        90: {
          value: '{vg.static.color.blue.100}',
          description: 'Blue-90 (lighten 10)',
          lighten: 10,
          darkMode: null,
        },
        100: {
          value: '#0F52BA',
          description: 'Blue',
          darkMode: null,
        },
        110: {
          value: '{vg.static.color.blue.100}',
          description: 'Blue-110 (darken 10)',
          darken: 10,
          darkMode: null,
        },
      },
    },
  },
};
