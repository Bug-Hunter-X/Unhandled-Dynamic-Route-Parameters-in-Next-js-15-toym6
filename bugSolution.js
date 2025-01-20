```javascript
// pages/about.js
import { useRouter } from 'next/router';

export default function About() {
  const router = useRouter();
  // Use optional chaining to safely access query parameters
  const id = router.query.id; 
  return (
    <div>
      <h1>About Page</h1>
      {id ? (<p>The ID is: {id}</p>):(<p>No ID provided</p>)}
      <p>This is the about page.</p>
    </div>
  );
}
```