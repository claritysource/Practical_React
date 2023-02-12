import React from 'react';

const SpinnerWithBackdrop = ({
  children,
}) =&gt; {
  return (
    &lt;div&gt;
      {children}
    &lt;/div&gt;
  )
}
const Start = () =&gt; {
  return (
    &lt;SpinnerWithBackdrop&gt;
      &lt;div&gt;
        &lt;button&gt;
          Show Spinner for two seconds
        &lt;/button&gt;
      &lt;/div&gt;
    &lt;/SpinnerWithBackdrop&gt;
  )
}

export default Start;