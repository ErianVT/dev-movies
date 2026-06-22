import styled from 'styled-components'

export const Container = styled.div`
  color: #fff;
`
export const Background = styled.div`
  background-image: url(${(props) => props.img});

  height: 50vh;
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  &&:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background-image: linear-gradient(to top, #0f0f0f, rgba(0, 0, 0, 0));
  }
`

export const HomeTitleMovie = styled.div`
  z-index: 99;
  font-size: 30px;
  color: #fff;
`
