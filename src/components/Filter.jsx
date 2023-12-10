import React from 'react';
import styled from 'styled-components';

const FilterLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  color: #323131;

  padding: 5px;
  margin: 20px 0;
`;

const FilterInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  display: flex;
  flex-direction: row;
  width: 250px;
  justify-content: space-between;
  align-items: center;
`;

const Filter = ({ filter, onChange }) => {
  return (
    <FilterLabel>
      Find contacts by name
      <FilterInput type="text" value={filter} onChange={onChange} />
    </FilterLabel>
  );
};

export default Filter;
