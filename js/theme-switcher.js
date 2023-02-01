const themes = [
    ['CSS Vars',
        `
    :root {
        --color-1: #083c5c;
        --color-2:#4a4e69;
        --dark: #495057;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #0abfa4;
        --warning: #bda06a;
        --luxury:#4b2f5a;
        --light-grey: #f6f6f6;
        --body-bg: #fff;
        --body-color: #111;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:8, 60, 92;
        --color-2-rgb:74, 78, 105;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 10, 191, 164;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:75, 47, 90;
    }
        `],
    ['CSS Vars (dark)',
    `
    :root {
        --color-1: #969494;
        --color-2:#7077a3;
        --dark: #4a4e6d;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #0abfa4;
        --warning: #bda06a;
        --luxury:#6a4380;
        --light-grey: #222536;
        --body-bg: #1b1d27;
        --body-color: #c0bebe;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:150, 148, 148;
        --color-2-rgb:112, 119, 163;
        --dark-rgb: 74, 78, 109;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 10, 191, 164;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:106, 67, 128;
      }
    `  
    ],
    ['Rosettes',
        `
    :root {
        --color-1: #d8a7b1;
        --color-2:#ef7c8e;
        --dark: #492529;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #b6e2d3;
        --success: #0abda2;
        --warning: #bda06a;
        --luxury:#4b2f5a;
        --light-grey: #f6f6f6;
        --body-bg: #fff;
        --body-color: #68343b;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:216, 167, 177;
        --color-2-rgb:239, 124, 142;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 182, 226, 211;
        --success-rgb: 10, 191, 164;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:75, 47, 90;
    }
        `,
        `    
        Hot Pink #ef7c8e
        Cream #fae8e0
        Spearmint #b6e2d3
        Rosewater #d8a7b1`
    ],
    ['Rosettes (Dark)',
        `
    :root {
        --color-1: #ef7c8e;
        --color-2:rgb(216, 167, 177);
        --dark: rgb(189, 97, 111);
        --grey: #ccc;
        --white: #fae8e0;
        --danger: #cc3a3a;
        --info: #b6e2d3;
        --success: #0abda2;
        --warning: #bda06a;
        --luxury:#4b2f5a;
        --light-grey: #4e282d;
        --body-bg: #3f1f24;
        --body-color: #d8a7b1;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:239, 124, 142;
        --color-2-rgb:216, 167, 177;
        --dark-rgb: 189, 97, 111;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 182, 226, 211;
        --success-rgb: 10, 191, 164;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:75, 47, 90;
    }
`
    ],
    ['Summer Shower',
        `
    :root {
        --color-1: #4c5270;
        --color-2:#f652a0;
        --dark: #222225;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #bcece0;
        --success: #36eee0;
        --warning: #bda06a;
        --luxury:#4b2f5a;
        --light-grey: #f6f6f6;
        --body-bg: #fff;
        --body-color: #111;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:76, 82, 112;
        --color-2-rgb:246, 82, 160;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 188, 236, 224;
        --success-rgb: 54, 238, 224;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:75, 47, 90;
    }
        `,
        `
        Tiffany Blue #bcece0
        Cyan #36eee0
        Hot Pink 
        #f652a0 Cornflower
        `
    ],
    ['Summer Shower (dark)',
        `
    :root {
        --color-1: #f651a0;
        --color-2:#bcece0;
        --dark: #c23b7c;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #bcece0;
        --success: #36eee0;
        --warning: #bda06a;
        --luxury:#4b2f5a;
        --light-grey: #545b7e;
        --body-bg: #4c5270;
        --body-color: #bcece0;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:246, 81, 160;
        --color-2-rgb:246, 82, 160;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 188, 236, 224;
        --success-rgb: 54, 238, 224;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:75, 47, 90;
    }
        `
],
    ['Summer Splash',
        `
    :root {
        --color-1: #05445e;
        --color-2:#189ab4;
        --dark: #222225;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #75e6da;
        --warning: #bda06a;
        --luxury:#4b2f5a;
        --light-grey: #d4f1f4;
        --body-bg: #fff;
        --body-color: #111;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:5, 68, 94;
        --color-2-rgb:24, 154, 180;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 117, 230, 218;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:75, 47, 90;
    }
        `,
        `
        Navy Blue #05445e
        Blue Grotto #189ab4
        Blue Green #75e6da
        Baby Blue #d4f1f4`
    ],
    ['Summer Splash (dark)',
    ` 
    :root {
        --color-1: #d4f1f4;
        --color-2:#189ab4;
        --dark: #127083;
        --grey: #ccc;
        --white: #fff;
        --danger: rgb(231, 81, 81);
        --info: #1191b8;
        --success: #75e6da;
        --warning: #bda06a;
        --luxury:#8952a7;
        --light-grey: #054f6e;
        --body-bg: #05445e;
        --body-color: #189ab4;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:212, 241, 244;
        --color-2-rgb:24, 154, 180;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 231, 81, 81;
        --info-rgb: 17, 145, 184;
        --success-rgb: 117, 230, 218;
        --warning-rgb:189, 160, 106;
        --luxury-rgb:137, 82, 167;
    }
    `],
    ['Green lemons',
    `
    :root {
        --color-1: #013a20;
        --color-2:#478c5c;
        --dark: rgb(1, 95, 53);
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #bacc81;
        --warning: #cdd193;
        --luxury:#4b2f5a;
        --light-grey: #dfe0d0;
        --body-bg: #fff;
        --body-color: #111;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:1, 58, 32;
        --color-2-rgb:71, 140, 92;
        --dark-rgb: 1, 95, 53;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 186, 204, 129;
        --warning-rgb:205, 209, 147;
        --luxury-rgb:75, 47, 90;
        }
    `,
    `
    Forest Green #013a20
    Emerald Green #478c5c
    Lint #bacc81
    Lint #cdd193 */`
    ],
    ['Green lemons (dark)',
    `
    :root {
        --color-1: #cdd193;
        --color-2:#478c5c;
        --dark: rgb(1, 95, 53);
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #bacc81;
        --warning: #cdd193;
        --luxury:#4b2f5a;
        --light-grey: #01502d;
        --body-bg: #013a20;
        --body-color: #cdd193;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:205, 209, 147;
        --color-2-rgb:71, 140, 92;
        --dark-rgb: 1, 95, 53;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 186, 204, 129;
        --warning-rgb:205, 209, 147;
        --luxury-rgb:75, 47, 90;
        }
    `,
    ``
    ],
    ['Orchid Lavender',
    `
    :root {
        --color-1: #613659;
        --color-2:#c197d2;
        --dark: #3b2137;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #0abfa4;
        --warning: #d3b1c2;
        --luxury:#4b2f5a;
        --light-grey: #f6f6f6;
        --body-bg: #fff;
        --body-color: #3a2135;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:97, 54, 8;
        --color-2-rgb: 193, 151, 210;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 10, 191, 164;
        --warning-rgb:211, 177, 194;
        --luxury-rgb:75, 47, 90;
    }
    `,
    `
    Mauve #d3b1c2
    Lavender #c197d2
    Black #211522
    Orchid #613659
    `
    ],
    ['Orchid Lavender (dark)',
    `
    :root {
        --color-1: #c197d2;
        --color-2:#613659;
        --dark: rgb(131, 103, 143);
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #0abfa4;
        --warning: #d3b1c2;
        --luxury:#4b2f5a;
        --light-grey: #422944;
        --body-bg: #211522;
        --body-color: #d3b1c2;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:193, 151, 210;
        --color-2-rgb: 97, 54, 89;
        --dark-rgb: 131, 103, 143;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 10, 191, 164;
        --warning-rgb:211, 177, 194;
        --luxury-rgb:75, 47, 90;
    }
    `,
    ``
    ],
    ['Desert',
    `
    :root {
        --color-1: #922c40;
        --color-2:#dc9750;
        --dark: #495057;
        --grey: #ccc;
        --white: #fff;
        --danger: #cc3a3a;
        --info: #1191b8;
        --success: #0abfa4;
        --warning: #f3eac0;
        --luxury:#4b2f5a;
        --light-grey: #f6f6f6;
        --body-bg: #fff;
        --body-color: #1e2640;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:146, 44, 64;
        --color-2-rgb:220, 151, 80;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 10, 191, 164;
        --warning-rgb:243, 234, 192;
        --luxury-rgb:75, 47, 90;
    }
    `,
    `
    Rose Red #922c40
    Desert Sun #dc9750
    Champagne #f3eac0
    Dark Blue #1e2640
    `
    ],
    ['Desert (dark)',
    `
    :root {
        --color-1: #dc9750;
        --color-2:#922c40;
        --dark: #9b6a39;
        --grey: #ccc;
        --white: #fff;
        --danger: #922c40;
        --info: #1191b8;
        --success: #0abfa4;
        --warning: #f3eac0;
        --luxury:#4b2f5a;
        --light-grey: #253052;
        --body-bg: #1e2640;
        --body-color: #f3eac0;
        --fontweight: 300;
        --fontweight-heading: 300;
        --font-size-mobile: 12px;
        --font-size-desktop: 16px;
        --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 
        "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
        --color-1-rgb:146, 44, 64;
        --color-2-rgb:220, 151, 80;
        --dark-rgb: 34, 34, 37;
        --grey-rgb: 204, 204, 204;
        --white-rgb: 255, 255, 255;
        --danger-rgb: 204, 58, 58;
        --info-rgb: 17, 145, 184;
        --success-rgb: 10, 191, 164;
        --warning-rgb:243, 234, 192;
        --luxury-rgb:75, 47, 90;
    }
    `,
    ``
    ]
    ]
var el = document.querySelector('#themeSelector')

for (let i=0; i< themes.length; i++ ) {
el.add(new Option(themes[i][0], i));
console.log(themes[i][0])
}

let style = ''
var styleEl = document.createElement('style')
styleEl.innrtHttml = style
    document.head.appendChild(styleEl)



function setTheme(){
var val= document.querySelector('#themeSelector').value
let theme = themes[val][1]
document.querySelector('#ThemeCodeOutput').innerHTML = themes[val][1]


    
    
let sheet = new CSSStyleSheet();
// sheet.replaceSync('body { color: red; }');
sheet.insertRule(theme);
document.adoptedStyleSheets = [sheet];

}

function copyText(id='ThemeCodeOutput'){
    var copyText = document.getElementById(id);
    navigator.clipboard.writeText(copyText.innerHTML);
}

