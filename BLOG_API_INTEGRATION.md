# Blog API Integration

This document describes the blog API integration implemented in the ViQanta application.

## API Endpoints

The application now integrates with the following blog API endpoints:

1. **GET /api/blogs/published** - Get all published blogs
2. **GET /api/blogs/slug/:slug** - Get blog by slug

## Environment Configuration

Create a `.env` file in the root directory with the following variable:

```env
VITE_API_URL=http://localhost:5000/api
```

Replace with your actual API URL in production.

### API Setup Requirements

1. **Start your API server** on the configured port (default: 5000)
2. **Ensure CORS is enabled** for your frontend domain
3. **Verify endpoints are accessible**:
   - `GET /api/blogs/published` - Returns published blogs
   - `GET /api/blogs/slug/:slug` - Returns individual blog by slug

### Error Handling

The application includes proper error handling:
- **API Connection Errors**: Clear error messages when API is not available
- **Timeout Handling**: 10-second timeout to prevent hanging requests
- **User-Friendly Messages**: Error states with retry options
- **Developer Logging**: Console errors for debugging API issues

## Components Updated

### 1. BlogPage.jsx
- Now fetches published blogs from the API
- Displays loading state while fetching
- Shows error state if API call fails
- Displays "No blogs found" message if no blogs are available

### 2. BlogView.jsx
- Fetches individual blog by slug/ID from the API
- Includes comprehensive SEO meta tags using React Helmet
- Displays related posts from the API
- Shows loading and error states

### 3. BlogBody.jsx
- Updated to support both slug and ID navigation
- Uses slug for navigation when available, falls back to ID

### 4. ViewBlogContent.jsx
- Now accepts and displays HTML content from the API
- Falls back to default content if no content is provided

## API Service Functions

### blogApi.js
Contains utility functions for:
- `getPublishedBlogs(page, limit)` - Fetch published blogs with pagination
- `getBlogBySlug(slug)` - Fetch individual blog by slug
- `transformBlogData(apiBlog)` - Transform API response to component format

## SEO Implementation

The BlogView component includes comprehensive SEO meta tags:
- Page title with blog title
- Meta description
- Meta keywords
- Open Graph tags for social sharing
- Twitter Card tags
- Article-specific meta tags
- Canonical URL

## Data Transformation

The API response is transformed to match the existing component structure:
- `_id` → `id`
- `publishDate` → formatted `date`
- `excerpt` → `subdescription`
- `content` → `content` (HTML)
- Calculated `readTime` based on content length
- Author and category information

## Error Handling

Both components include comprehensive error handling:
- Loading states with spinner
- Error messages with retry options
- Fallback content when data is unavailable
- Graceful degradation for missing data

## Usage

1. Set up your API endpoint in the environment variables
2. Ensure your API returns data in the expected format
3. The components will automatically fetch and display blog data
4. SEO meta tags will be dynamically generated for each blog post

## Troubleshooting

### Common Issues

1. **"Failed to fetch" Error**
   - **Cause**: API server is not running or URL is incorrect
   - **Solution**: Start your API server and verify the URL in `.env`
   - **Result**: App will show error message with retry option

2. **CORS Errors**
   - **Cause**: API doesn't allow requests from your frontend domain
   - **Solution**: Enable CORS in your API server for your frontend domain

3. **Timeout Errors**
   - **Cause**: API is slow to respond (over 10 seconds)
   - **Solution**: Optimize your API or increase timeout in `blogApi.js`
   - **Result**: App will show timeout error message

4. **404 Errors**
   - **Cause**: API endpoints don't exist or have different paths
   - **Solution**: Verify your API endpoints match the expected paths
   - **Result**: App will show appropriate error message

### API Requirements

The app requires a running API server:
- No fallback data is provided
- API must be accessible for the app to function
- Error states are shown when API is unavailable
- Users can retry failed requests
