import matter from 'gray-matter'
import fs from 'fs'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemoteSerializeResult } from 'next-mdx-remote'
import { FrontMatter } from '../types'

export const parseMarkdownFile = async (filePath: string): Promise<{ frontMatter: FrontMatter; mdxSource: MDXRemoteSerializeResult }> => {
    const markdownWithMeta = fs.readFileSync(filePath, 'utf-8')
    const { data, content } = matter(markdownWithMeta)
    const frontMatter = data as FrontMatter

    /** Serialize MDX into HTML */
    const mdxSource = await serialize(content)

    return { frontMatter, mdxSource }
}
