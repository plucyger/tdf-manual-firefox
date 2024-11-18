module.exports = {
      content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            'primary-blue': '#2563EB',
            'primary-blue-hover': '#1D4ED8',
            'primary-blue-active': '#1E40AF',
            'secondary-navy': '#1E293B',
            'secondary-navy-hover': '#0F172A',
            'secondary-navy-active': '#0F172A',
            'accent-green': '#10B981',
            'accent-green-hover': '#059669',
            'accent-green-active': '#047857',
            'background': '#FFFFFF',
            'surface': '#F8FAFC',
            'light-gray': '#E2E8F0',
            'mid-gray': '#94A3B8',
            'dark-gray': '#475569',
            'success': '#22C55E',
            'warning': '#F59E0B',
            'error': '#EF4444',
            'info': '#3B82F6',
          },
          fontSize: {
            'h1': '2.25rem',
            'h2': '1.875rem',
            'h3': '1.5rem',
            'h4': '1.25rem',
            'body': '1rem',
            'small': '0.875rem',
            'tiny': '0.75rem',
          },
          fontFamily: {
            'inter': ['Inter', 'sans-serif'],
          },
        },
      },
      plugins: [],
    }
