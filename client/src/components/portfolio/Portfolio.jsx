import './portfolio.scss'

const Portfolio = () => {
  return (
    <section>Portfolio</section>
  )
}

export default Portfolio

// const App = () => {
//   const [portfolio, setPortfolio] = useState({});
//   const { websites = [] } = portfolio;

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = () => {
//     fetch("/api/portfolio")
//       .then((res) => res.json())
//       .then((result) => setPortfolio(result))
//       .catch((err) => console.log(err));
//   };
//   return (
//     <div>
//       <ul>
//         {websites.map(({ id, img, title }) => (
//           <li key={id}>
//             <span>{img}</span>
//             <span>{title}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
