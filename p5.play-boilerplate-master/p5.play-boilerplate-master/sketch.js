var player,player2
var background,backgroundimg
var enemyimg
var enemyGroup
var bullet,bulletImg,bulletGroup
var y = false;
var enemy;
function preload()
{
    player2 = loadImage("1680435143281.png")
    enemyimg = loadImage("1680436312656.png")
    backgroundimg = loadImage("photo-1585575141647-c2c436949374.jpg")
    bulletImg = loadImage("1680442372771.png")
}
function setup()
{
  createCanvas(1200, 800);
    player = createSprite(500,600,200,73)
    player.addImage("SpacesHIP",player2)
    player.scale = 0.2
    enemyGroup = new Group();
    bulletGroup = new Group();

}
function enemySpawn()
{
  enemy = createSprite(random(200,800),100,200,89)
  enemy.addImage(enemyimg)
  enemy.scale = 0.3
  enemy.velocityY += 9
  enemyGroup.add(enemy)
}
function shoot()
{
  if(frameCount % 7 === 0)
  {
    bullet = createSprite(player.x,player.y+34)
    bullet.velocityY -= 8
    bullet.addImage("f;jkdzfg",bulletImg)
    bullet.scale = 0.1
    bulletGroup.add(bullet)
  }

}
function draw()
{
  if(frameCount % 50 === 0)
  {
    enemySpawn()
  }
  if(keyDown("RIGHT_ARROW"))
  {
    player.x += 5
  }
  if(keyDown("LEFT_ARROW"))
  {
    player.x -= 5
  }
  if(keyDown("SPACE"))
  {
     shoot()
     y = true
  }
  if(bulletGroup.isTouching(enemyGroup))
  {
    enemy.destroy()
  }

  background(backgroundimg)
  drawSprites();
}