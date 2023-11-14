export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("REQUEST: ", body);
    if(body != null){
        const response = await fetch('https://dev-hnq6v8fsy53yctdl.us.auth0.com/oauth/token', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              client_id: process.env.AUTH0_API_CLIENT_ID,
              client_secret: process.env.AUTH0_API_CLIENT_SECRET,
              audience: process.env.AUTH0_AUDIENCE,
              grant_type: process.env.AUTH0_GRANT_TYPE
          })
      });
      const data = await response.json();

      return new Response(JSON.stringify(data), {
      headers: {'Content-Type': 'application/json'}
      })
    } else {
      return new Response('Error occurred, user not found', {status: 500});
    }
  
  } catch(err){
    return new Response('Error occurred', {status: 500});
  }
  
  }