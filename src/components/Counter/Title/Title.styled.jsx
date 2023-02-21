import styled from 'styled-components';

export const StyledTitle = styled.h2`
color: ${p => p.theme.colors.counter.titleColor};
font-size: ${p => p.theme.fontSizes.g}
`;

export const StyledTitleValue = styled.h2`
color: ${p => p.theme.colors.counter.titleValueColor};
font-size: ${p => p.theme.fontSizes.j}
`;