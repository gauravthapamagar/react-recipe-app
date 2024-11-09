import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

const Recipe = () => {
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState('instructions');

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };
  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  return (
    <DetailWrapper>
      <TitleImage>
            <h2>{details.title}</h2>
            <RecipeImage src={details.image} alt={details.title} />
      </TitleImage>
      <Info>
        <Button className={activeTab === 'instructions' ? 'active' : ''} onClick={() => setActiveTab('instructions')}>Instructions</Button>
        <Button className={activeTab === 'ingredients' ? 'active' : ''} onClick={() => setActiveTab('ingredients')}>Ingredients</Button>
        <div>
          <h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
        </div>
      </Info>
    </DetailWrapper>
  );
};
const TitleImage = styled.div`
  flex: 1; 
  padding-right: 2rem;
`;
const RecipeImage = styled.img`
  max-width: 100%; 
  height: auto; 
  display: block; 
  margin-bottom: 1rem; 
`;
const DetailWrapper = styled.div`
  margin-top: 5rem;  
  margin-bottom: 2.5rem; 
  display: flex;
  
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 1rem; 
    font-size: 1.5rem;  
  }
  h3 {
    font-size: 0.9rem;  
    font-weight: 600;
    line-height: 1.5rem;
  }
  li {
    font-size: 1rem;  
    line-height: 2rem; 
  }
  ul {
    margin-top: 1rem;  
  }
  
`;

const Button = styled.button`
  padding: 0.25rem 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 1rem;  
  font-weight: 600;
  height: 2rem;  
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.8rem;
`;

const Info = styled.div`
  flex: 1;
  
`;

export default Recipe;

// const DetailWrapper = styled.div`
//   margin-top: 10rem;
//   margin-bottom: 5rem;
//   display: flex;
//   .active {
//     background: linear-gradient(35deg, #494949, #313131);
//     color: white;
//   }
//   h2 {
//     margin-bottom: 2rem;
//   }
//   h3{
//     font-size: 1rem;
//     font-weight: 500;
//   }
//   li {
//     font-size: 1.2rem;
//     line-height: 2.5rem;
//   }
//   ul {
//     margin-top: 2rem;
//   }
// `;
// const Button = styled.button`
//   padding: 0.5rem 2rem;
//   color: #313131;
//   background: white;
//   border: 2px solid black;
//   margin-right: 2rem;
//   font-weight: 600;
//   height: 2.5rem;
//   align-items: center;
//   justify-content: center;
//   cursor: pointer;
//   `;
// const Info = styled.div`
//   margin-left: 10rem;
//   /* display: flex; */
  
// `;
// export default Recipe;
