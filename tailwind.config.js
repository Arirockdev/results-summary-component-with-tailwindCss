/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        'fontFamily': ["Hanken Grotesk"]
      } 
    },

    colors: {
    //* primary
      lightRed: 'var(--light-red)',
      orangeYellow: 'var(--orange-yellow)',
      greenTeal: 'var(--green-teal)',
      cobaltBlue: 'var(--cobalt-blue)',
    
      lightRedAlpha: 'var(--light-red-alpha)',
      orangeYellowAlpha: 'var(--orange-yellow-alpha)',
      greenTealAlpha: 'var(--green-teal-alpha)',
      cobaltBlueAlpha: 'var(--cobalt-blue-alpha)',
    
      //* gradients

      ligthSlateBlueBg: 'var(--light-slate-blue-background',
      lightRoyalBlueBg: 'var(--light-royal-blue-background)',
      violetBlueCircle: 'var(--violet-blue-circle)',
      persianBlueCircle: 'var(--persian-blue-circle)',



    //* Neutrals
      gray: 'var(--gray)',
      white: 'var(--white)',
      paleBlue: 'var(--pale-blue)',
      lightLavender: 'var(--light-lavender)',
      darkGrayBlue: 'var(--dark-gray-blue)'
    }
    },
  plugins: [],
}
