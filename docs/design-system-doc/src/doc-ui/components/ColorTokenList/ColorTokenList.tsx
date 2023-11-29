type DesignToken = Record<string | number, any>;

interface ColorTokenListProps {
  token: DesignToken;
}

export const ColorTokenList = (props: ColorTokenListProps): React.ReactNode => {
  const { token } = props;

  const renderTokens = (t: DesignToken, parentKey?: string): any => {
    return Object.keys(t).map((key) => {
      let newKey: string = key;

      if (parentKey !== undefined) newKey = `${parentKey}/${key}`;

      if (t[key].value === undefined) {
        const nestedToken: DesignToken = t[key];
        return renderTokens(nestedToken, newKey);
      }

      return (
        <div key={key}>
          <p>{`${newKey}: ${t[key].value}`}</p>
        </div>
      );
    });
  };

  return <>{renderTokens(token)}</>;
};
