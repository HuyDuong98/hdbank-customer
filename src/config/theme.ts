import { createTheme } from "@material-ui/core/styles";
import { colour } from "./colours";

const commonRootBorder = {
  root: {
    padding: "0.875rem 0",
    "& .MuiInput-underline": {
      "&:before": {
        borderColor: colour.border,
      },
    },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: colour.primary01,
        borderLeftWidth: 1,
      },

      "&.Mui-focused fieldset": {
        borderColor: colour.primary01,
        borderWidth: ".0625rem",
      },
    },
  },
};

// A custom theme for this app
const theme = createTheme({
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "Be Vietnam",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
    ].join(","),
  },
  palette: {
    primary: {
      main: colour.primary01,
    },
    secondary: {
      main: colour.primary02,
    },
    error: {
      main: colour.primary01,
    },
    background: {
      default: colour.white,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        borderRadius: "6rem",
        padding: "0.625rem 2rem",
      },
      containedSizeSmall: {
        padding: "0.25rem 1rem",
      },
      outlined: {
        padding: "0.625rem 2rem",
      },
      label: {
        fontSize: "1rem",
        textTransform: "none",
      },
      containedSecondary: {
        color: colour.white,
      },
    },
    MuiTextField: { ...commonRootBorder },
    MuiFormControl: { ...commonRootBorder },
    MuiTypography: {
      body1: {
        fontWeight: 500,
      },
      body2: {
        fontWeight: 400,
        color: colour.gray,
      },
    },
    MuiIconButton: {
      root: {
        borderRadius: "0",
        padding: "0.625rem",
      },
    },
    // MuiDataGrid: {
    //   cell: {
    //     borderBottom: 0,
    //   },
    // },
    MuiSelect: {
      root: {
        display: "flex",
        alignItems: "center",
      },
    },
    MuiFormHelperText: {
      contained: {
        marginLeft: 0,
        marginRight: 0,
      },
    },
  },
  props: {
    MuiTypography: {
      variantMapping: {
        body1: "span",
        body2: "span",
      },
    },
    MuiButton: {
      disableElevation: true,
    },
  },
});

export default theme;
