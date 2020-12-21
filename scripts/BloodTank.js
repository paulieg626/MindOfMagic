const BloodTank = extendContent(Block, "BloodTank", {});

BloodTank.buildType = () => extend(Building, {
  buildConfiguration(table) {
       table.button("[red]"+this.liquids.get(Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"))+"/"+BloodTank.liquidCapacity+"m", run(() => {})).size(200,50);
       table.row();
       table.button("[blue][E] [white]Положить", run(() => {
        if(Vars.player.unit().health>20&&BloodTank.liquidCapacity!=this.liquids.get(Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"))){
          Vars.player.unit().health=Vars.player.unit().health-20;
          this.liquids.add(Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood"),3)
          Vars.control.input.frag.config.hideConfig();
         }
        })).size(200,50);
        table.row();
       table.button("[red][F] [white]Взять", run(() => {
          //Действие
        })).size(200,50);
  },
  update(){
      var hp = Vars.player.unit().health;
      var x = this.x;
      var y = this.y;
  },
  acceptLiquid(BloodTank,liquid){
    if(liquid == Vars.content.getByName(ContentType.liquid,"mindofmagic-Blood")) return true;
    return false;
  },
  drawLayer(t){
font = Fonts.outline;
ints = font.usesIntegerPositions();
font.setUseIntegerPositions(false);
font.getData().setScale(1 / 10 / Scl.scl(1));
font.draw(this.HP,t.drawx(),t.drawy()+8)
font.setUseIntegerPositions(ints);
font.setColor(Color.red);
font.getData().setScale(1);
}
});
BloodTank.update = true;
BloodTank.configurable = true;