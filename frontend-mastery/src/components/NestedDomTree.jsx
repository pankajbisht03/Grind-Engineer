
  function RenderNode({node}){
      if(!node){
          return null
      }
      const {type, props={}, children=[]} = node;
      const Component = type
      return (
          <Component {...props}>
              {props.children}
              {children.map((child, ind) => (
                  <RenderNode key={ind} node={child}>

                  </RenderNode>
              ))}

          </Component>
      )
  }
  export default RenderNode