# Personal Portfolio Website   

A modern, responsive portfolio website showcasing projects, skills, and contact information.

## Features

- **Fully Responsive Design**: Adapts seamlessly to mobile, tablet, and desktop views
- **Interactive Project Gallery**: Click or tap on projects to reveal details and links
- **Smooth Animations**: Fluid transitions and hover effects throughout the site
- **Modern UI**: Clean design with gradient accents and glass-morphism effects
- **Single Page Application**: Smooth navigation between sections

## Project Structure

```
portfolio/
├── index.html          # Main HTML structure
├── styles.css          # All styling and animations
├── script.js           # Interactive functionality
├── profile1.jpeg       # Profile image
├── calculator.webp     # Project image
├── favicon.png         # Favicon image
├── portiflo.png        # Project image
└── README.md           # This file
```

## Sections

1. **Hero**: Introduction with call-to-action buttons
2. **About**: Personal information and stats
3. **Projects**: Interactive project gallery with filtering
4. **Skills**: Technical skills with animated progress bars
5. **Contact**: Contact form and social links
6. **Footer**: Additional links and copyright

## Interactive Elements

### Project Cards
- **Desktop**: Hover over cards to reveal project details
- **Mobile**: Tap on cards to toggle project details
- **View Project Button**: Opens GitHub profile in a new tab

### Navigation
- Smooth scrolling to sections
- Responsive hamburger menu for mobile
- Active state tracking during scroll

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- Font Awesome Icons
- Google Fonts

## How to Run Locally

1. Clone or download the repository
2. Open `index.html` in your browser

Or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (if http-server is installed)
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Customization

To customize the portfolio:

1. **Content**: Edit `index.html` to update personal information
2. **Styling**: Modify `styles.css` for visual changes
3. **Functionality**: Update `script.js` for interactive features
4. **Images**: Replace images in the root directory with your own

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Author

Alan Acharya

## License

This project is open source and available under the MIT License.
