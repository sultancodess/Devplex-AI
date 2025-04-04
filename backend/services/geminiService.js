// const axios = require("axios");
// const dedent = require("dedent");

// const generateCodeFromAI = async (userPrompt) => {
//   const API_KEY = process.env.GEMINI_API;

//   if (!API_KEY) {
//     console.error(" Error: Missing GEMINI_API key in environment variables.");
//     return {
//       error: "API key is missing",
//       details: "Please check your environment configuration",
//     };
//   }

//   const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

//   const CODE_GEN_PROMPT = dedent`
//    User Additional Context: ${userPrompt || "No additional context provided"}
//   Generate a Project in React. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed.
//   The output should use Tailwind CSS for styling, without any third-party dependencies or libraries, except for icons from the lucide-react library,
//   which should only be used when necessary. Available icons include: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell,
//   Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, and ArrowRight.

//   Return the response in JSON format with the following schema:
//   {
//     "projectTitle": "",
//     "explanation": "",
//     "files": {
//       "/App.js": {
//         "code": ""
//       }
//     },
//     "generatedFiles": []
//   }

//   - Use date-fns for date formatting and react-chartjs-2 for charts/graphs if necessary.
//   - Placeholder images: https://archive.org/download/placeholder-image/placeholder-image.jpg
//   - Make all designs production-worthy, not generic.
//   - Use stock photos from Unsplash when appropriate.
//   - Use lucide-react for icons if necessary.

//   IMPORTANT: Return ONLY raw JSON without any markdown formatting, comments, or wrapping backticks.
// The response must be directly parseable as JSON.
//   `;

//   try {
//     console.log("🚀 Sending Request to AI Service");
//     console.log("Prompt:", CODE_GEN_PROMPT);

//     const response = await axios.post(API_URL, {
//       contents: [
//         {
//           parts: [{ text: CODE_GEN_PROMPT }],
//         },
//       ],
//     });

//     // Log ENTIRE raw response
//     console.log(
//       "FULL RAW RESPONSE:",
//       JSON.stringify(response.data, null, 2)
//     );

//     // Log response data structure
//     console.log(" Response Structure:", Object.keys(response.data));

//     // Detailed response logging
//     console.log(" Candidates Count:", response.data.candidates?.length);
//     // Extract the text from the response
//     const responseText =
//       response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

//     // Log the raw text
//     console.log(" Raw Response Text (Before Parsing):", responseText);

//     if (!responseText) {
//       console.error("No response text found in API response");
//       return {
//         error: "No response text found",
//         details: "The API response did not contain the expected text",
//         fullResponse: response.data,
//       };
//     }

//     // Remove markdown code block markers
//     let cleanedResponse = responseText
//       .replace(/^```json\n/, "") // Remove opening ```json
//       .replace(/```$/, "") // Remove closing ```
//       .trim();

//     // Log cleaned response
//     console.log(" Cleaned Response:", cleanedResponse);

//     // Parse the cleaned response
//     try {
//       const parsedResponse = JSON.parse(cleanedResponse);

//       // Log parsed response
//       console.log(
//         "Parsed Response:",
//         JSON.stringify(parsedResponse, null, 2)
//       );

//       // Post-process file contents to handle escaped characters
//       Object.keys(parsedResponse.files || {}).forEach((filePath) => {
//         if (parsedResponse.files[filePath].code) {
//           // Replace escaped newlines and unescape other special characters
//           parsedResponse.files[filePath].code = parsedResponse.files[
//             filePath
//           ].code
//             .replace(/\\n/g, "\n")
//             .replace(/\\"/g, '"')
//             .replace(/\\'/g, "'")
//             .replace(/\\\\/g, "\\");
//         }
//       });

//       return parsedResponse;
//     } catch (parseError) {
//       console.error("JSON Parsing Error:", parseError);
//       console.error("Raw response that failed parsing:", cleanedResponse);

//       return {
//         error: "Failed to parse AI response",
//         details: parseError.message,
//         rawResponse: cleanedResponse,
//       };
//     }
//   } catch (error) {
//     console.error("AI Service Error:", {
//       message: error.message,
//       stack: error.stack,
//       response: error.response?.data,
//     });

//     return {
//       error: "Failed to process AI response",
//       details: error.message,
//       code: "AI_SERVICE_ERROR",
//     };
//   }
// };

// module.exports = generateCodeFromAI;
// const axios = require("axios");
// const dedent = require("dedent");

// const generateCodeFromAI = async (userPrompt) => {
//   const API_KEY = process.env.GEMINI_API;

//   if (!API_KEY) {
//     console.error(" Error: Missing GEMINI_API key in environment variables.");
//     return {
//       error: "API key is missing",
//       details: "Please check your environment configuration",
//     };
//   }

//   const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;

//   const CHAT_PROMPT = dedent`
//     You are an AI Assistant experienced in React Development.
//     GUIDELINES:
//     - Tell user what you are building
//     - Response less than 15 lines
//     - Skip code examples and commentary
//   `;

//   const CODE_GEN_PROMPT = dedent`
//     User Additional Context: ${userPrompt || "No additional context provided"}
//     Generate a Project in React. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed.
//     The output should use Tailwind CSS for styling, without any third-party dependencies or libraries, except for icons from the lucide-react library,
//     which should only be used when necessary. Available icons include: Heart, Shield, Clock, Users, Play, Home, Search, Menu, User, Settings, Mail, Bell,
//     Calendar, Star, Upload, Download, Trash, Edit, Plus, Minus, Check, X, and ArrowRight.

//     Return the response in JSON format with the following schema:
//     {
//       "projectTitle": "",
//       "explanation": "",
//       "files": {
//         "/App.js": {
//           "code": ""
//         }
//       },
//       "generatedFiles": []
//     }

//     - Use date-fns for date formatting and react-chartjs-2 for charts/graphs if necessary.
//     - Placeholder images: https://archive.org/download/placeholder-image/placeholder-image.jpg
//     - Make all designs production-worthy, not generic.
//     - Use stock photos from Unsplash when appropriate.
//     - Use lucide-react for icons if necessary.

//     IMPORTANT: Return ONLY raw JSON without any markdown formatting, comments, or wrapping backticks.
//     The response must be directly parseable as JSON.
//   `;

//   try {
//     console.log("🚀 Sending Request to AI Service");
//     console.log("Prompt:", CODE_GEN_PROMPT);

//     const response = await axios.post(API_URL, {
//       contents: [
//         {
//           parts: [{ text: CHAT_PROMPT + "\n\n" + CODE_GEN_PROMPT }],
//         },
//       ],
//     });

//     // Log ENTIRE raw response
//     console.log("FULL RAW RESPONSE:", JSON.stringify(response.data, null, 2));

//     // Log response data structure
//     console.log(" Response Structure:", Object.keys(response.data));

//     // Detailed response logging
//     console.log(" Candidates Count:", response.data.candidates?.length);
//     // Extract the text from the response
//     const responseText =
//       response.data?.candidates?.[0]?.content?.parts?.[0]?.text;

//     // Log the raw text
//     console.log(" Raw Response Text (Before Parsing):", responseText);

//     if (!responseText) {
//       console.error("No response text found in API response");
//       return {
//         error: "No response text found",
//         details: "The API response did not contain the expected text",
//         fullResponse: response.data,
//       };
//     }

//     // Remove markdown code block markers
//     let cleanedResponse = responseText
//       .replace(/^```json\n/, "") // Remove opening ```json
//       .replace(/```$/, "") // Remove closing ```
//       .trim();

//     // Log cleaned response
//     console.log(" Cleaned Response:", cleanedResponse);

//     // Parse the cleaned response
//     try {
//       const parsedResponse = JSON.parse(cleanedResponse);

//       // Log parsed response
//       console.log("Parsed Response:", JSON.stringify(parsedResponse, null, 2));

//       // Post-process file contents to handle escaped characters
//       Object.keys(parsedResponse.files || {}).forEach((filePath) => {
//         if (parsedResponse.files[filePath].code) {
//           // Replace escaped newlines and unescape other special characters
//           parsedResponse.files[filePath].code = parsedResponse.files[
//             filePath
//           ].code
//             .replace(/\\n/g, "\n")
//             .replace(/\\"/g, '"')
//             .replace(/\\'/g, "'")
//             .replace(/\\\\/g, "\\");
//         }
//       });

//       return parsedResponse;
//     } catch (parseError) {
//       console.error("JSON Parsing Error:", parseError);
//       console.error("Raw response that failed parsing:", cleanedResponse);

//       return {
//         error: "Failed to parse AI response",
//         details: parseError.message,
//         rawResponse: cleanedResponse,
//       };
//     }
//   } catch (error) {
//     console.error("AI Service Error:", {
//       message: error.message,
//       stack: error.stack,
//       response: error.response?.data,
//     });

//     return {
//       error: "Failed to process AI response",
//       details: error.message,
//       code: "AI_SERVICE_ERROR",
//     };
//   }
// };

// module.exports = generateCodeFromAI;

const axios = require("axios");
const dedent = require("dedent");

const generateCodeFromAI = async (userPrompt) => {
  const API_KEY = process.env.GEMINI_API;

  if (!API_KEY) {
    console.error("Error: Missing GEMINI_API key in environment variables.");
    return {
      error: "API key is missing",
      details: "Please check your environment configuration",
    };
  }

  const API_URL = `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${API_KEY}`;

  // const CODE_GEN_PROMPT = dedent`
  //   User Additional Context: ${userPrompt || "No additional context provided"}
  //   Generate a Project in React. Create multiple components, organizing them in separate folders with filenames using the .js extension, if needed. 
  //   The output should use Tailwind CSS for styling, without any third-party dependencies or libraries, except for icons from the lucide-react library.
  //   Return the response in valid JSON format with this schema:
  //   {
  //     "projectTitle": "",
  //     "explanation": "",
  //     "files": {
  //       "/App.js": {
  //         "code": ""
  //       }
  //     },
  //     "generatedFiles": []
  //   }

  //   - Use date-fns for date formatting and react-chartjs-2 for charts/graphs if necessary.
  //   - Placeholder images: https://archive.org/download/placeholder-image/placeholder-image.jpg
  //   - Make all designs production-worthy, not generic.
  //   - Use stock photos from Unsplash when appropriate.    
  //   - Use lucide-react for icons if necessary.
    
  //   IMPORTANT: Return ONLY raw JSON without any markdown formatting or backticks.
  // `;
  
// const CODE_GEN_PROMPT = dedent`
//   User Additional Context: ${userPrompt || "No additional context provided"}

//   Generate a COMPLETE production-ready React project with multiple components. Each component must be fully developed with:
//   - Complete structure (not just 2-3 lines)
//   - Proper Tailwind CSS styling
//   - Responsive design
//   - Accessibility features
//   - Clear documentation

//   REQUIREMENTS:
//   1. Create at least 5 meaningful components (e.g.,  MainContent, Navbar, Sidebar, Footer, etc.)
//   2. Each component must have:
//      - Complete JSX structure
//      - Meaningful props (when applicable)
//      - State management (useState/useEffect)
//      - Proper Tailwind classes for styling
//      - Mobile-first responsive design
//      - ARIA attributes for accessibility
//   3. Include a proper layout structure with:
//      - Navbar with navigation
//      - Main content area
//      - Sidebar (when applicable)
//      - Footer
//   4. Use the following Tailwind styling standards:
//      - Consistent color palette
//      - Proper spacing (p-4, m-2, etc.)
//      - Responsive breakpoints (sm:, md:, lg:)
//      - Hover/focus states
//      - Smooth transitions

//   Available dependencies (use as needed):
//   - lucide-react for icons
//   - date-fns for dates
//   - react-chartjs-2 for charts
//   - firebase for backend
//   - @google/generative-ai for AI features

//   STRICT FORMAT REQUIREMENTS:
//   {
//     "projectTitle": "Descriptive title",
//     "explanation": "Detailed explanation of components and architecture",
//     "files": {
//       "/components/Navbar.js": {
//         "code": "COMPLETE component code with styling"
//       },
//       "/components/MainContent.js": {
//         "code": "COMPLETE component code with styling"
//       },
//       // At least 3 more components
//       "/App.js": {
//         "code": "Complete main app structure"
//       }
//     },
//     "generatedFiles": [
//       "/components/Navbar.js",
//       "/components/MainContent.js",
//       // List all files
//     ]
//   }

//   IMPORTANT:
//   - DO NOT return partial or incomplete code
//   - EVERY component must be fully functional
//   - Include ALL necessary imports
//   - Use PROPER indentation and formatting
//   - Style EVERY visible element
//   - If you return incomplete code, I will REJECT the response

//     IMPORTANT: Your response MUST be valid JSON ONLY. Do not wrap the response in markdown code blocks or backticks of any kind.
//   The response must begin with { and end with } with properly escaped strings inside.
// `;

const responses = [
  "Alright! Here's how we'll create your",
  "Great! Let's build your",
  "Okay! Here's the plan for your",
  "Let's enhance this feature! We'll create your",
  "No problem! Here's how we'll approach your",
  "Let's get started! We'll create your",
  ];
  const randomResponse =
    responses[Math.floor(Math.random() * responses.length)];

  const CODE_GEN_PROMPT = `
  # Two-Phase Response System

  ## Phase 1: Conversational Introduction (ALWAYS START WITH THIS)
  Respond conversationally to the user's request first, then proceed with the structured output.
  
  Example Response Format:
  "${randomResponse} [Project Type]: [Brief 2-3 sentence explanation of the approach]. 
  I'll generate a complete React project with [Key Features]."

  Provide step-by-step updates on file operations in a structured and natural format.
  Each update should mention the operation (Creating, Updating, Deleting), the file name.
  Keep it concise, clear, and human-readable without JSON formatting.
  Example format:
    Creating: App.jsx 
    Updating: Navbar.jsx

  ---
  ## Phase 2:  Structured Output (After conversational intro)
  Generate a COMPLETE production-ready React project with JavaScript and Tailwind CSS.
  The design should follow the latest UI/UX trends, ensuring a clean, professional, and visually appealing interface.
  The output must be a fully functional application with all necessary components, styles, and logic.

  USER REQUIREMENTS:
  ${userPrompt || "No additional requirements provided"}

  TECHNICAL REQUIREMENTS:
  1. Project Structure:
     - Use App.js (not App.jsx)
     - All components/pages must use .jsx (e.g., Navbar.jsx, Home.jsx)
     - Use functional components with JavaScript
     - Follow React best practices
     - Include proper JavaScript interfaces/types
     - Don't use TypeScript
     - Use modern React hooks (useState, useEffect, etc.)
     

  2. Component Requirements:
     - Minimum 5 meaningful components
     - Each component must be fully self-contained
     - Include proper props typing
     - State management where appropriate
     - Complete JSX structure
     - Meaningful component names

  3. Styling Requirements:
     - Use Tailwind CSS for all styling
     - Mobile-first responsive design
     - Consistent spacing (px-4, py-2, etc.)
     - Responsive breakpoints (sm, md, lg, xl)
     - Dark mode support
     - Hover/focus states
     - Smooth transitions
     - Accessible color contrast

  4. Accessibility:
     - Semantic HTML
     - ARIA attributes
     - Keyboard navigation support
     - Focus management
     - Screen reader support

  5. Code Quality:
     - Proper error handling
     - Loading states
     - Clean code structure
     - JSDoc comments
     - ESLint compliant
     - Prettier formatted
   
     - Use date-fns for date formatting and react-chartjs-2 for charts/graphs if necessary.
     - Find and use high-quality, royalty-free images from Pexels that best match the website's theme. Prioritize visually appealing, modern, and relevant images based on the website's niche. Ensure that the images enhance the user experience and fit seamlessly into the design     - Make all designs production-worthy, not generic.
     - Use stock photos from Unsplash when appropriate.    
     - Use lucide-react for icons if necessary.

  

  OUTPUT FORMAT REQUIREMENTS (strict JSON):
  {

    "response":"Conversational Introduction",
    "updates": [
    {
      "operation": "creating",
      "file": "App.jsx"
    },
    {
      "operation": "updating",
      "file": "Navbar.jsx"
    }
  ],
    "projectTitle": "Descriptive project title",
    "explanation": "Detailed description of the project",
    
    
    "files": {
      "/components/ComponentName.jsx": {
        "code": "Complete JavaScript component code",
        "styles": "Tailwind classes used"
      },
      "/App.js": {
        "code": "Complete main application code"
      }
    },
    "setupInstructions": "npm install && npm run dev"
  }

  EXAMPLE OUTPUT:
  {
    "response": "Conversational Introduction",
        "updates": [
    {
      "operation": "creating",
      "file": "App.jsx"
    },
    {
      "operation": "updating",
      "file": "Navbar.jsx"
    }
  ],
    "projectTitle": "Task Management Dashboard",
    "explanation": "A responsive task management dashboard with dark mode support",
     

    "files": {
      "/components/Navbar.jsx": {
        "code": "import React, { useState } from 'react';\nimport { Menu, X, Search } from 'lucide-react';\n\nconst Navbar = ({ toggleSidebar }) => {\n  const [searchQuery, setSearchQuery] = useState('');\n  \n  return (\n    <nav className=\"bg-white shadow-sm py-3 px-6 flex items-center justify-between sticky top-0 z-10\">\n      <div className=\"flex items-center space-x-4\">\n        <button \n          onClick={toggleSidebar}\n          className=\"md:hidden text-gray-600 hover:text-gray-900\"\n          aria-label=\"Toggle sidebar\"\n        >\n          <Menu size={24} />\n        </button>\n        <h1 className=\"text-xl font-semibold text-gray-800\">Dashboard</h1>\n      </div>\n      \n      <div className=\"flex-1 max-w-md mx-4 hidden md:block\">\n        <div className=\"relative\">\n          <Search className=\"absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400\" size={18} />\n          <input\n            type=\"text\"\n            placeholder=\"Search...\"\n            className=\"w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent\"\n            value={searchQuery}\n            onChange={(e) => setSearchQuery(e.target.value)}\n            aria-label=\"Search dashboard\"\n          />\n        </div>\n      </div>\n      \n      <div className=\"flex items-center space-x-4\">\n        <button className=\"p-2 rounded-full hover:bg-gray-100\" aria-label=\"Notifications\">\n          <div className=\"relative\">\n            <span className=\"absolute top-0 right-0 h-2 w-2 rounded-full bg-red-500\"></span>\n          </div>\n        </button>\n        <div className=\"h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium\">\n          JD\n        </div>\n      </div>\n    </nav>\n  );\n};\n\nexport default Navbar;",
        "styles": "bg-white, dark:bg-gray-800, p-4, rounded-lg, shadow, text-lg, font-medium"
      }
    },
    "setupInstructions": "npm install && npm run dev"
  }

  IMPORTANT RULES:
  1. EVERY component must be fully complete and production-ready
  2. Include ALL necessary imports and exports
  3. Use PROPER JavaScript typing
  4. Style EVERY visible element
  5. Include responsive design
  6. No placeholder comments - only actual code
  7. All components must be connected and work together
  8. If requirements aren't met, the response will be rejected
  9. Dont use TypeScript

  RESPONSE FORMAT:
  Your response must be valid JSON ONLY, beginning with { and ending with }.
  Do not wrap the response in markdown or add any extraneous text.

    IMPORTANT: Your response MUST be valid JSON ONLY. Do not wrap the response in markdown code blocks or backticks of any kind.
  The response must begin with { and end with } with properly escaped strings inside.
`;

  try {

    const response = await axios.post(API_URL, {
      contents: [
        {
          parts: [{ text: CODE_GEN_PROMPT }],
        },
      ],
    });


    const responseText =
      response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    console.log(responseText);

    if (!responseText) {
      console.error("No response text found in API response");
      return {
        error: "No response text found",
        details: "The API response did not contain the expected text",
        fullResponse: response.data,
      };
    }


    let jsonResponse;
    try {
      
      const cleanedResponse = responseText
        .replace(/^```(json)?\n/, "")
        .replace(/```$/, "")
        .replace(/`/g, "")
        .trim();

      jsonResponse = JSON.parse(cleanedResponse);
    } catch (parseError) {
      console.error("JSON Parsing Error:", parseError);


      const jsonMatch = responseText.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          jsonResponse = JSON.parse(jsonMatch[0]);
        } catch (secondAttemptError) {
          console.error("Secondary parsing failed:", secondAttemptError);
          return {
            error: "Invalid JSON response from AI",
            details: secondAttemptError.message,
            rawResponse: responseText,
          };
        }
      } else {
        return {
          error: "No valid JSON found in response",
          details: parseError.message,
          rawResponse: responseText,
        };
      }
    }

    // Validate the response structure
    if (!jsonResponse.files || typeof jsonResponse.files !== "object") {
      return {
        error: "Invalid project structure",
        details: "Response missing required 'files' object",
        response: jsonResponse,
      };
    }

    // Process file contents to ensure proper formatting
    const processedFiles = {};
    for (const [path, file] of Object.entries(jsonResponse.files)) {
      processedFiles[path] = {
        code: file.code
          ? file.code.replace(/\\n/g, "\n").replace(/\\"/g, '"')
          : "",
      };
    }

    return {
      ...jsonResponse,
      files: processedFiles,
    };
  } catch (error) {
    console.error("AI Service Error:", {
      message: error.message,
      stack: error.stack,
      response: error.response?.data,
    });

    return {
      error: "Failed to process AI response",
      details: error.message,
      code: "AI_SERVICE_ERROR",
    };
  }
};

module.exports = generateCodeFromAI;