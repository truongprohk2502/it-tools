export const CSS_SOURCE = `const FancyButton = styled(Button)({
  flex: 1,
  padding: 10,
  backgroundColor: 'orange',
  color: colors.white,

  '&:hover': {
    backgroundColor: 'tomato',
  },
});`;

export const TEMPLATE_SOURCE = `const FancyButton = styled(Button)\`
  flex: 1;
  padding: 10px;
  background-color: orange;
  color: \${colors.white};

  &:hover {
    background-color: tomato;
  }
\`;`;
