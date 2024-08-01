import React, { useState } from 'react';

// Sample code snippets
const codeSnippets = {
  createUser: `
import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Create a new user
const { user, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'example-password',
})
    
`,
  Subscriptions: `
import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Get notified of all new chat messages
const realtime = supabase
  .from('messages')
  .on('INSERT', message => {
    console.log('New message!', message)
  })
  .subscribe()
`,
  Bucket: `
import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Get notified of all new chat messages
const realtime = supabase
  .from('messages')
  .on('INSERT', message => {
    console.log('New message!', message)
  })
  .subscribe()
`,
  EdgeFunction: `
import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Invoke a function
const { data, error } = await supabase.functions.invoke('hello', {
  body: { foo: 'bar' }
})
    
`,
  Crudrecord: `
import { createClient } from '@supabase/supabase-js'
    
// Initialize 
const supabaseUrl = 'https://chat-room.supabase.co'
const supabaseKey = 'public-anon-key'
const supabase = createClient(supabaseUrl, supabaseKey)

// Invoke a function
const { data, error } = await supabase.functions.invoke('hello', {
  body: { foo: 'bar' }
})
    
    
`,

};

export default function CodeSectionWithTabs() {
  const [activeTab, setActiveTab] = useState('createUser');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab])
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(err => console.error('Failed to copy: ', err));
  };

  return (
    <div className="p-6 max-w-4xl mx-auto bg-slate-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Code Snippets</h2>

      {/* Navigation Tabs */}
      <nav className="mb-4">
        <ul className="flex space-x-4">
          {Object.keys(codeSnippets).map((language) => (
            <li key={language}>
              <button
                className={`px-4 py-2 rounded ${activeTab === language ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'}`}
                onClick={() => setActiveTab(language)}
              >
                {language}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {/* Code Snippet Display */}
      <pre className="bg-gray-900 text-white p-4 rounded-lg overflow-x-auto">
        <code>{codeSnippets[activeTab]}</code>
      </pre>

      {/* Copy Button */}
      <button
        onClick={handleCopy}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {copied ? 'Copied!' : 'Copy Code'}
      </button>
    </div>
  );
}
