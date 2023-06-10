import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 4;
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 12;
`;

export const Logout = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: white;
  background-color: #006eff;
  font-weight: 500;

  &.hover,
  &.focus {
    color: white;
    background-color: #7ca6dd;
  }
`;

// export const Box = styled.div`
//   display: flex;
//   gap: 15px;
//   align-items: center;
// `;

// export const Logout = styled.button`
//   padding: 8px 16px;
//   border-radius: 4px;
//   text-decoration: none;
//   color: white;
//   background-color: #006eff;
//   font-weight: 500;

//   &.hover,
//   &.focus {
//     color: white;
//     background-color: #7ca6dd;
//   }
// `;
