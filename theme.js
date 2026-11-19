// Gedeelde Tailwind-thema (RKC geel/blauw) voor index.html en admin.html
tailwind.config = {
    theme: {
        extend: {
            colors: {
                rkc: {
                    yellow: '#FFD100',
                    yellowHover: '#F5C400',
                    blue: '#0038A8',
                    blueDark: '#002878',
                    navy: '#001A4D',
                    light: '#F4F7FC'
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Oswald', 'sans-serif']
            }
        }
    }
};
