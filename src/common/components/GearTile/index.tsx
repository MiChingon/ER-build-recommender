import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";

const GearTile = ({
  label,
  image,
  name,
  onClick,
  onClear,
}: {
  label: string;
  image: string | null;
  name: string | null;
  onClick: () => void;
  onClear: () => void;
}) => {
  return (
    <Paper
      variant="outlined"
      onClick={onClick}
      sx={{
        flex: "1 1 0",
        minWidth: 0,
        overflow: "hidden",
        p: 1,
        cursor: "pointer",
        position: "relative",
        minHeight: 96,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "&:hover": { borderColor: "primary.light" },
      }}
    >
      <Typography
        variant="caption"
        color="text.secondary"
        sx={{ position: "absolute", top: 2, left: 6, fontSize: "0.65rem" }}
      >
        {label}
      </Typography>
      {image ? (
        <>
          <Box
            component="img"
            src={image}
            alt=""
            loading="lazy"
            sx={{ width: 48, height: 48, objectFit: "contain", bgcolor: "action.hover", borderRadius: 0.5, flexShrink: 0 }}
          />
          {name && (
            <Tooltip title={name}>
              <Typography
                variant="caption"
                sx={{ mt: 0.5, textAlign: "center", lineHeight: 1.2, width: "100%", display: "block" }}
                noWrap
              >
                {name}
              </Typography>
            </Tooltip>
          )}
          <IconButton
            size="small"
            aria-label="Clear slot"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
            sx={{ position: "absolute", top: 0, right: 0, p: { xs: 0.75, sm: 0.25 } }}
          >
            <Typography
              variant="caption"
              sx={{ fontSize: { xs: "1rem", sm: "0.85rem" }, lineHeight: 1 }}
            >
              ×
            </Typography>
          </IconButton>
        </>
      ) : (
        <Typography variant="caption" color="text.disabled">
          Empty
        </Typography>
      )}
    </Paper>
  );
}

export default GearTile
