Storage in Web Applications
Web applications needs to store data in client side for:
1. Authentication
2. Preferences
3. Caching

The Web platform provides five primary storage mechanisms:
1. Cookies
2. Session Storage
3. Local Storage
4. IndexedDB
5. Cache Storage

1. Cookies
 Cookies are small piece of data stored by browser and sent to server with every Http request. Cookies can have expiration rules
 Size: ~4KB(4096 bytes)

 Two types of Cookies
 1. Session Cookies
  🔹Deleted when browser closes
  🔹No explicit expiry
2. Persistent Cookies
   🔹Stored across sessions
   🔹Have expiration date

Pros
Server can read them
works with ssr
can be secured

Cons
sent on every request(performance overhead)
limited size
vulnerable if misused(xss, csrf)

Security flags
JS can't access
https only
samesite=>CSRF protection

➡✔💲💱 sameSite is a cookie attribute that tells the browser when it is allowed to send a cookie along with cross-site request. 
Three values to sameSite => strict, lax and none
strict(ideal for high security systems for banking, having highest CSRF protection) => the browser sents cookie for same-site requests
myapp.com and you open a link from gmail.com to myapp.com/profile than cookies are not sent and user may appear to be logged out as sameSite is set to strict.



Session Storage
Session Storage stores data for a single tab session and is not shared across tabs. Data lives until the tab is closed.
Can store ~5MB of data, and not send to server(client side only)
Common Use Cases:
1. Multi-step form
2. Temporary UI state
   


Local Storage
Local Storage stores data across browser sessions until explicitly cleared.
~5 to 10 MB capacity
Client Side Only

Use Cases
Theme Preferences
Language Selection
Cached API response
User Settings

Is local storage sharable across website ? No, LocalStorage is scoped to an origin.
protocol + domain + port