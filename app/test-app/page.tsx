// app/test-app/page.js

// Changing color to anything does not have any impact. CSS is not refreshing. You need manually reload page to obtain the newest css
export default function Page() {
  return <h1 className="bg-blue-500">COLOR</h1>
}
