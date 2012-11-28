(function() {
  dust.register("demo", body_0);

  function body_0(chk, ctx) {
    return chk.write("<div class=\"profile-header\"><img src={").reference(ctx.get("img"), ctx, "h").write("} class=\"photo\" width=\"80\"          height=\"80\"><h1>{").reference(ctx.get("firstname"), ctx, "h").write("}{").reference(ctx.get("lastname"), ctx, "h").write("}</h1><p>Locacion: {").reference(ctx.get("city"), ctx, "h").write("}</p><p>Industry: {").reference(ctx.get("ind"), ctx, "h").write("}</p><h2 class=\"section-title\">{").reference(ctx.get("firstname"), ctx, "h").write("} {").reference(ctx.get("lastname"), ctx, "h").write("} Overview </h2></div>");
  }
  return body_0;
})();
