import { HttpStatus, Collection, AppBasicInfo, RapDvApp, Request, HtmlUtils } from "rapdv-lib"
import { Response, NextFunction } from "express"

export class RssFeed {
  public static get = async (req: Request, res: Response, next: NextFunction, app: RapDvApp) => {
    const appInfo: AppBasicInfo = app.setBasicInfo()
    const postsModel = Collection.get("Post")
    const FROM = 0
    const MAX = 50
    const posts = await postsModel.findAll(undefined, FROM, MAX)
    const lastPublishedDate = posts[0]?.publishedDate ?? new Date()

    res.header("Content-Type", "application/xml")
    res.status(HttpStatus.OK).send(`
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>${appInfo.name}</title>
        <link>${process.env.BASE_URL}</link>
        <description>${appInfo.description}</description>
        <language>en-us</language>
        <atom:link href="${process.env.BASE_URL}/v1/rss" rel="self" type="application/rss+xml" />
        <pubDate>${lastPublishedDate.toUTCString()}</pubDate>
        <lastBuildDate>${lastPublishedDate.toUTCString()}</lastBuildDate>
        <generator>RapDv</generator>
        <managingEditor>${process.env.SEND_FROM_EMAIL} (${process.env.SEND_FROM_NAME})</managingEditor>
        <webMaster>${process.env.SEND_FROM_EMAIL} (${process.env.SEND_FROM_NAME})</webMaster>
        ${posts
          .map(
            (post) => `
          <item>
            <title>${HtmlUtils.removeAllTags(post.title)}</title>
            <link>${process.env.BASE_URL}/article/${post.key}</link>
            <guid isPermaLink="false">urn:uuid:{${post._id}}</guid>
            <description>${HtmlUtils.removeAllTags(post.description)}</description>
            <pubDate>${post.publishedDate.toUTCString()}</pubDate>
          </item>
        `
          )
          .reduce((prev, current) => prev + current, "")}
      </channel>
    </rss>`)
  }
}
