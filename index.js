const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for resources and learning styles
const resources = {
    Websites: [
        { name: "Khan Academy", url: "https://www.khanacademy.org", description: "Free online courses and practice." },
        { name: "Coursera", url: "https://www.coursera.org", description: "Online courses from top universities." },
        // More resources...
    ],
    Books: [
        { name: "STEM Student Success: Programming", author: "John Doe", description: "A beginner's guide to programming." },
        // More books...
    ],
    Videos: [
        { name: "Introduction to STEM", url: "https://www.youtube.com/watch?v=xyz", description: "An introductory video about STEM." },
        // More videos...
    ],
};

const learningStyles = [
    { style: "Visual", description: "Prefers using images, diagrams, and spatial understanding." },
    { style: "Auditory", description: "Prefers using sound and music." },
    { style: "Kinesthetic", description: "Prefers using physical activities and hands-on learning." },
];

// API routes
app.get('/resources', (req, res) => {
    res.json(resources);
});

app.get('/learning-styles', (req, res) => {
    res.json(learningStyles);
});

app.post('/quiz', express.json(), (req, res) => {
    const { answers } = req.body;
    // Simple logic to determine learning style based on answers
    const result = 1/* Determine learning style */;
    res.json({ style: result });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
