import styled from "styled-components";

export const Title = styled.h1`
  text-align: center;
  color: ${(props)=> props.theme.primaryColor};
`

export const Description = styled.h4`
  text-align: center;
  color: ${(props)=> props.theme.secondaryColor};
`

export const LogoImage = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
`

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
`

export const ItemWrapper = styled.div`
  margin: 20px;
  img{
    width: 200px;
    height: 200px;
  }
  p{
    text-align: center;
    color: ${(props)=> props.theme.primaryColor};
  }
  p.item-price{
    color: ${(props)=> props.theme.secondaryColor};
  }
`
