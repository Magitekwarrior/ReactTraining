// This element won't render anything to DOM but will act nicely 
// to cover ReactJS's requirement to have a wrap adjacent jsx elements.
const Wrapper = (props) => {
  return ( props.children );
}
 
export default Wrapper;